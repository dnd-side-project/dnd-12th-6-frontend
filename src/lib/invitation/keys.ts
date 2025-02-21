export const cardQueryKeys = {
  all: ['card'] as const,
  sent: () => [...cardQueryKeys.all, 'sent'] as const,
  received: () => [...cardQueryKeys.all, 'received'] as const,
  create: () => [...cardQueryKeys.all, 'create'] as const,
  background: () => [...cardQueryKeys.all, 'background'] as const,
  info: (invitationId: number) => [...cardQueryKeys.all, 'info', invitationId] as const,
  responses: (invitationId: number) => [...cardQueryKeys.all, 'responses', invitationId] as const,
};
