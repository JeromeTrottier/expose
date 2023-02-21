import { useEffect, useState } from "react";
import { getUserStat } from "../models/user-model";
import { ExposeUserStats } from "../types";

export default function useUserStats(userID: string) {
    const [userStats, setUserStats] = useState<ExposeUserStats>({
        followers: 0,
        posts: 0,
        exposes: 0
    });

    useEffect(() => {
        const getStats = async () => {
           const followersStats = await getUserStat(userID, "followers");
           const postsStats = await getUserStat(userID, "posts");
           const exposesStats = await getUserStat(userID, "exposes");
           setUserStats({
            followers: followersStats,
            posts: postsStats,
            exposes: exposesStats
           });
        }
        getStats();
    }, []) 

    return userStats;
}