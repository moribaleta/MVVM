import useStorage from '.';

const useStorageViewModel = () => {
  const viewModel = useStorage();

  return {
    ...viewModel,
  };
};

export default useStorageViewModel;
