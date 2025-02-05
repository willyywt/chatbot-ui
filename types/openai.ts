export interface OpenAIModel {
  id: string;
  name: string;
  // Didn't understand what does this do. Currently always set to 3 * tokenLimit
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

// See https://platform.openai.com/docs/models
// It doesn't makes sense to use GPT-4 and GPT-3.5 now. They are more expensive but less performant
export enum OpenAIModelID {
  GPT_4O_MINI = 'gpt-4o-mini',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
// FIXME: check whether DEFAULT_MODEL correctly overrides this if set
export const fallbackModelID = OpenAIModelID.GPT_4O_MINI;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4O_MINI]: {
    id: OpenAIModelID.GPT_4O_MINI,
    name: 'GPT-4o Mini',
    maxLength: 384000,
    tokenLimit: 128000,
  },
};
