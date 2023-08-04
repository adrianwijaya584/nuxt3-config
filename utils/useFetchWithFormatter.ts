import { useTokenStore } from "~/stores/token";

export default async function<T>(url: string, options?: any) {
  const tokenStore= useTokenStore();

  // console.log(tokenStore.getToken());

  return await useLazyFetch(url, {
    headers: {
      Authorization: `Bearer 51fd6163e5e14595c32ffc557396e97bb3a37f0ddc65728734b220d5134ec6dd55b4f43729da03ce06a060035ffa4c569fdd21cd0fe9b16315c91311e6f7af515f9903b262feb22d897b95176a9fc101619083b4cd41f4d4fe9fb74cf5e5e1f45ae9457f398907fefcb5eefa4539eddb99b833c7e24e3d096a47df2015381947e1f6ac4933e08fbcb7259119775c64677298e6cb56459fc19a7d529643e0f53239abf6847525c7b4f46f696a84e03242f8990c57d09b01de67491beede5a7778dc1bd8448f0bd6e5fbc57ee460d2f39c54cfad3eb36cdfb758341ea536e2bda4a93d43ab1d14529b4e2532c5049182001203bfa78709cec70496b1ae35f7779f12fc3d3ffb3191cf4b7bd846a78852540084513408cba4011b7b694ee2bb744df29dc7180ae449422fc8bf865c494b932a470161137f6ac613014b0862c7af1abfa86d68e60e9243f1d807fb2d13914deb45da82b9ea1bf8a2d999f76e805f33b871c7fbc699e7304664969f`
    },
    transform: (val: any)=> {
      return val.data as T;
    }
  })
}