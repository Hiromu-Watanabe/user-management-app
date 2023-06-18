import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { user } from "../types/api/user";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      try {
        setLoading(true);

        const res: user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
        console.log(res);
        if (res) {
          navigate("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      } catch (err) {
        alert("ユーザーが見つかりません");
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );
  return { login, loading };
};
