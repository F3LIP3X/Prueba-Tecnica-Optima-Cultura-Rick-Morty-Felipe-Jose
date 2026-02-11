export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const useCharacters = () => {
  const characters = ref<Character[]>([]);
  const loading = ref(false);

  const fetchCharacters = async (page: number = 1, name?: string) => {
    loading.value = true;

    try {
      const params = new URLSearchParams();
      params.set("page", String(page));

      if (name && name.trim()) {
        params.set("name", name.trim());
      }

      const response = await $fetch<CharactersResponse>(
        `https://rickandmortyapi.com/api/character?${params.toString()}`
      );

      characters.value = response.results;
      return response;
    } catch (e) {
      console.error(e);
      characters.value = [];
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    characters,
    loading,
    fetchCharacters
  };
};