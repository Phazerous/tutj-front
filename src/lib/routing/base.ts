const baseRoute = process.env.NEXT_PUBLIC_BASE_ROUTE;

export const get = async (path: string): Promise<JSON> => {
  const response = await fetch(baseRoute + path, {
    method: 'GET',
  });

  return handleResponse(response);
};

export const post = async (path: string, body: object) => {
  const response = await fetch(baseRoute + path, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
};

export const patch = async (path: string, body: object) => {
  const response = await fetch(baseRoute + path, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
};

const handleResponse = async (response: Response) => {
  if (!response.ok) throw response;

  const headers = response.headers;
  const contentType = headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    const json = await response.json();

    return json;
  }

  throw new Error('The "Content-Type" of response cannot be processed.');
};
