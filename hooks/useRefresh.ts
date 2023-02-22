import { useCallback, useState } from "react";

export default function useRefresh() {
    
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const onRefresh = useCallback(() => {
        
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return {refreshing, onRefresh};
}