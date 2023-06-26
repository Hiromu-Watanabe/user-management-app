import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>();
  // トーストのカスタムhook
  const { showMessage } = useMessage();

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      if (!res) {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      } else {
        setUsers(res.data);
      }
    } catch (err) {
      console.log(err);
      showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
    } finally {
      setLoading(false);
    }
  }, []);
  return { getUsers, loading, users };
};
