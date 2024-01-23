import storage from '../services/storage';
import useStorage from '.';

const useStorageViewModel = () => {
  //dependency injection
  const viewModel = useStorage(storage);

  return {
    ...viewModel,
  };
};

export default useStorageViewModel;
