import axios from "axios";
import React, { useState } from "react";

const API_SERVER_HOST = "http://localhost:8080/api/v1";
const postFom = async function (form: FormDataType) {
  const res = await axios.post(`${API_SERVER_HOST}/copywriter`, form);
  console.log("서버 도착", res);
  return res.data;
};

type FormDataType = {
  name: string;
  brandName: string;
  value: string;
  strength: string;
  toneManner: string;
  keyword: string;
};

const initialData: FormDataType = {
  name: "",
  brandName: "",
  value: "",
  strength: "",
  toneManner: "",
  keyword: "",
};

function CopyWriter() {
  const [formData, setFormData] = useState<FormDataType>(initialData);
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const result = await postFom(formData);
      console.log(result);
      setAds(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(!loading);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h2>광구 문구 생성</h2>
      <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
        {(
          [
            ["name", "제품명"],
            ["brandName", "브랜드명"],
            ["value", "브랜드 핵심 가치"],
            ["strength", "제품 특징"],
            ["toneManner", "톤앤매너"],
            ["keyword", "필수 포함 키워드"],
          ] as [keyof FormDataType, string][]
        ).map(([name, label]) => (
          <div className="flex flex-col" key={name}>
            <label htmlFor={name} className="mb-1 text-sm font-medium">
              {label}
            </label>
            <input
              name={name}
              placeholder={label}
              required
              value={formData[name]}
              onChange={handleChange}
              className="rounded-xs border-2 border-stone-300 p-2"
            />
          </div>
        ))}

        <div className="p-2 text-center">
          <button
            type="submit"
            className="mx-1 my-6 rounded-[3px] bg-sky-500 px-4.5 py-3 text-[1.2em] text-white hover:bg-sky-800"
          >
            {loading ? "광고 문구 생성 중..." : "광고 문구 생성"}
          </button>
        </div>
      </form>
      <div>
        {ads && (
          <textarea
            className="w-max rounded-lg border border-gray-300 px-3 py-2"
            rows={5}
            value={ads}
            readOnly
          ></textarea>
        )}
      </div>
    </>
  );
}

export default CopyWriter;
