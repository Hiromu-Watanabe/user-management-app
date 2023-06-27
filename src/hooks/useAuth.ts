import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage(); // トーストのカスタムhooks
  const { setLoginUser } = useLoginUser(); // ログインユーザーcontextのhooks

  const login = useCallback(
    async (id: string) => {
      try {
        setLoading(true);

        const res: User = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
        if (res) {
          const isAdmin = res.id === 10 ? true : false;
          setLoginUser({ ...res, isAdmin });
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
    [navigate, showMessage, setLoginUser]
  );
  return { login, loading };
};
