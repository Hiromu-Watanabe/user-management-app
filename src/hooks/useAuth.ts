import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // トーストのカスタムhook
  const { showMessage } = useMessage();

  const login = useCallback(
    async (id: string) => {
      try {
        setLoading(true);

        const res: User = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
        if (res) {
          navigate("/home");
          showMessage({ title: "ログインしました", status: "success" });
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      } catch (err) {
        showMessage({ title: "ユーザーが見つかりません", status: "error" });
      } finally {
        setLoading(false);
      }
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
