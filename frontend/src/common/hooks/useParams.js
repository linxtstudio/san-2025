import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useUpdateParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getCurrentParams = useCallback(() => {
    return new URLSearchParams(Array.from(searchParams.entries()));
  }, [searchParams]);

  const currentParams = getCurrentParams();

  function paramsToQuery({ exclude } = {}) {
    const thisParams = currentParams;
    if (exclude) {
      thisParams.delete(exclude);
    }
    const newQuery = thisParams.toString();
    const query = newQuery ? `?${newQuery}` : '';
    return query;
  }
  const updateParams = () => {
    const newQuery = currentParams.toString();
    const query = newQuery ? `?${newQuery}` : '';

    router.replace(`${pathname}${query}`, { scroll: false });
  };

  const deleteParams = (keys, config) => {
    keys.forEach((param) => {
      currentParams.delete(param);
    });

    if (!config) return;

    if (config.update) {
      updateParams();
    }
  };

  const deleteParamsByRegex = (regex, config) => {
    const keys = Array.from(currentParams.keys()).filter((key) =>
      regex.test(key)
    );
    deleteParams(keys, config);
  };

  const clearParams = () => {
    router.push(pathname, { scroll: false });
  };

  return {
    currentParams,
    clearParams,
    deleteParams,
    deleteParamsByRegex,
    updateParams,
    paramsToQuery,
  };
}
