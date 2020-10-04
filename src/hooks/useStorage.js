import { useEffect, useState } from "react";
import firebase from "../firebase";
import { isObject, isArray } from "lodash";

const useStorage = (collection, options = {}) => {
    const [docs, setDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection(collection);

        if (isObject(options)) {
            const { where } = options;

            if (isArray(where)) {
                unsubscribe = unsubscribe.where(...where)
            }
        }

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const documents = [];

            snapshot.forEach((item) => {
                documents.push({
                    id: item.id,
                    ...item.data()
                });
            });

            setDocs(documents);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [collection]);

    return {
        docs,
        isLoading
    }
};

export default useStorage;