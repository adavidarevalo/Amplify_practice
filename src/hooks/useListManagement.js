/** @format */

import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import _ from 'lodash';
import { useToast } from '@chakra-ui/react';
import { listLists } from './../graphql/queries';
import { onCreateList, onDeleteList, onUpdateList } from './../graphql/subscriptions';

const useListManagement = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchList = async () => {
    setLoading(true);
    try {
      const { data } = await API.graphql(graphqlOperation(listLists));
      setList(_.get(data, 'listLists.items', []));
    } catch (error) {
      toast({
        title: 'There was an error.',
        description: error?.message || 'Unexpected error',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    const subscriptionCreate = API.graphql(graphqlOperation(onCreateList)).subscribe({
      next: ({ value }) => {
        setList(prevState => [_.get(value, 'data.onCreateList'), ...prevState]);
      },
    });

    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteList)).subscribe({
      next: ({ value }) => {
        setList(prevState => prevState.filter(list => list.id !== _.get(value, 'data.onDeleteList.id')));
      },
    });

    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateList)).subscribe({
      next: ({ value }) => {
        setList(prevState =>
          prevState.map(list => {
            if (list.id === _.get(value, 'data.onUpdateList.id')) {
              return _.get(value, 'data.onUpdateList');
            }
            return list;
          })
        );
      },
    });

    return () => {
      subscriptionCreate.unsubscribe();
      subscriptionDelete.unsubscribe();
      subscriptionUpdate.unsubscribe();
    };
  }, []);

  return { list, loading };
};

export default useListManagement;
