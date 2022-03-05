import { useEffect, useState } from "react";
import { getFirestore } from "../firebase";

const useGetFirestore = (categoryId, limit) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null);
  let db = getFirestore().collection('products');

  useEffect(() => {
    let call
    let callChange = false
    if (categoryId === "mujer" || categoryId === "hombre" || categoryId === "accesorios") {

      call = db.where("categoryId", "==", categoryId);
    }
    else if (categoryId) {
      call = db.doc(categoryId)
      callChange = true
    }
    else {
      call = db.orderBy("orden").limit(limit)
    }

    call.get().then((response) => setData((callChange) ? { ...response.data(), id: response.id } : (response.docs.map((item) => ({ ...item.data(), id: item.id })))))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false),
        call = "");
    return (
      setData([]),
      setIsLoading(true),
      setError(null)

    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);


  return { data, isLoading, error }
}
export default useGetFirestore