import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';
import { ErrorProps } from 'types/common/main';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';

const useApi = (url: string, endpoint: string, query: DocumentNode) => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>();
    const [error, setError] = useState<ErrorProps>({ status: 0, message: '' });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const fullurl = url + endpoint;
            const client = new ApolloClient({
                uri: fullurl,
                cache: new InMemoryCache(),
            });

            const fetchData = async () => {
                try {
                    const { loading, data } = await client.query({
                        query: query,
                    });
                    setLoading(loading);
                    setData(data.List);
                } catch (error) {
                    console.error(error);
                    setError({ status: 500, message: 'Error' });
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        } else {
            if (endpoint == '/boba_list') {
                setData(bobaList);
            } else if (endpoint == '/toppings_list') {
                setData(toppingsList);
            } else {
                setData(milkList);
            }
            setLoading(false);
        }
    }, [url, endpoint]);

    return { data, error, loading };
};

export default useApi;
