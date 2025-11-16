import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReplyVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$ReplyVotePayload>;
export type AggregateReplyVote = {
    _count: ReplyVoteCountAggregateOutputType | null;
    _min: ReplyVoteMinAggregateOutputType | null;
    _max: ReplyVoteMaxAggregateOutputType | null;
};
export type ReplyVoteMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    by_profile_id: string | null;
    reply_id: string | null;
    vote: boolean | null;
};
export type ReplyVoteMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    by_profile_id: string | null;
    reply_id: string | null;
    vote: boolean | null;
};
export type ReplyVoteCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    by_profile_id: number;
    reply_id: number;
    vote: number;
    _all: number;
};
export type ReplyVoteMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    reply_id?: true;
    vote?: true;
};
export type ReplyVoteMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    reply_id?: true;
    vote?: true;
};
export type ReplyVoteCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    reply_id?: true;
    vote?: true;
    _all?: true;
};
export type ReplyVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithRelationInput | Prisma.ReplyVoteOrderByWithRelationInput[];
    cursor?: Prisma.ReplyVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReplyVoteCountAggregateInputType;
    _min?: ReplyVoteMinAggregateInputType;
    _max?: ReplyVoteMaxAggregateInputType;
};
export type GetReplyVoteAggregateType<T extends ReplyVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateReplyVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReplyVote[P]> : Prisma.GetScalarType<T[P], AggregateReplyVote[P]>;
};
export type ReplyVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithAggregationInput | Prisma.ReplyVoteOrderByWithAggregationInput[];
    by: Prisma.ReplyVoteScalarFieldEnum[] | Prisma.ReplyVoteScalarFieldEnum;
    having?: Prisma.ReplyVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReplyVoteCountAggregateInputType | true;
    _min?: ReplyVoteMinAggregateInputType;
    _max?: ReplyVoteMaxAggregateInputType;
};
export type ReplyVoteGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    by_profile_id: string;
    reply_id: string;
    vote: boolean;
    _count: ReplyVoteCountAggregateOutputType | null;
    _min: ReplyVoteMinAggregateOutputType | null;
    _max: ReplyVoteMaxAggregateOutputType | null;
};
type GetReplyVoteGroupByPayload<T extends ReplyVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReplyVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReplyVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReplyVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReplyVoteGroupByOutputType[P]>;
}>>;
export type ReplyVoteWhereInput = {
    AND?: Prisma.ReplyVoteWhereInput | Prisma.ReplyVoteWhereInput[];
    OR?: Prisma.ReplyVoteWhereInput[];
    NOT?: Prisma.ReplyVoteWhereInput | Prisma.ReplyVoteWhereInput[];
    id?: Prisma.StringFilter<"ReplyVote"> | string;
    created_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"ReplyVote"> | string;
    reply_id?: Prisma.StringFilter<"ReplyVote"> | string;
    vote?: Prisma.BoolFilter<"ReplyVote"> | boolean;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    reply?: Prisma.XOR<Prisma.ReplyScalarRelationFilter, Prisma.ReplyWhereInput>;
};
export type ReplyVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    reply_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    by_profile?: Prisma.ProfileOrderByWithRelationInput;
    reply?: Prisma.ReplyOrderByWithRelationInput;
};
export type ReplyVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    by_profile_id_reply_id?: Prisma.ReplyVoteBy_profile_idReply_idCompoundUniqueInput;
    AND?: Prisma.ReplyVoteWhereInput | Prisma.ReplyVoteWhereInput[];
    OR?: Prisma.ReplyVoteWhereInput[];
    NOT?: Prisma.ReplyVoteWhereInput | Prisma.ReplyVoteWhereInput[];
    created_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"ReplyVote"> | string;
    reply_id?: Prisma.StringFilter<"ReplyVote"> | string;
    vote?: Prisma.BoolFilter<"ReplyVote"> | boolean;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    reply?: Prisma.XOR<Prisma.ReplyScalarRelationFilter, Prisma.ReplyWhereInput>;
}, "id" | "by_profile_id_reply_id">;
export type ReplyVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    reply_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    _count?: Prisma.ReplyVoteCountOrderByAggregateInput;
    _max?: Prisma.ReplyVoteMaxOrderByAggregateInput;
    _min?: Prisma.ReplyVoteMinOrderByAggregateInput;
};
export type ReplyVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReplyVoteScalarWhereWithAggregatesInput | Prisma.ReplyVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReplyVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReplyVoteScalarWhereWithAggregatesInput | Prisma.ReplyVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ReplyVote"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ReplyVote"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"ReplyVote"> | Date | string;
    by_profile_id?: Prisma.StringWithAggregatesFilter<"ReplyVote"> | string;
    reply_id?: Prisma.StringWithAggregatesFilter<"ReplyVote"> | string;
    vote?: Prisma.BoolWithAggregatesFilter<"ReplyVote"> | boolean;
};
export type ReplyVoteCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutReply_votesInput;
    reply: Prisma.ReplyCreateNestedOneWithoutRatingsInput;
};
export type ReplyVoteUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    reply_id: string;
    vote: boolean;
};
export type ReplyVoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutReply_votesNestedInput;
    reply?: Prisma.ReplyUpdateOneRequiredWithoutRatingsNestedInput;
};
export type ReplyVoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reply_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    reply_id: string;
    vote: boolean;
};
export type ReplyVoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reply_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteListRelationFilter = {
    every?: Prisma.ReplyVoteWhereInput;
    some?: Prisma.ReplyVoteWhereInput;
    none?: Prisma.ReplyVoteWhereInput;
};
export type ReplyVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReplyVoteBy_profile_idReply_idCompoundUniqueInput = {
    by_profile_id: string;
    reply_id: string;
};
export type ReplyVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    reply_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type ReplyVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    reply_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type ReplyVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    reply_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type ReplyVoteCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyVoteCreateWithoutBy_profileInput[] | Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput | Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.ReplyVoteCreateManyBy_profileInputEnvelope;
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
};
export type ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyVoteCreateWithoutBy_profileInput[] | Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput | Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.ReplyVoteCreateManyBy_profileInputEnvelope;
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
};
export type ReplyVoteUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyVoteCreateWithoutBy_profileInput[] | Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput | Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.ReplyVoteUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyVoteUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.ReplyVoteCreateManyBy_profileInputEnvelope;
    set?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    disconnect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    delete?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    update?: Prisma.ReplyVoteUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyVoteUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.ReplyVoteUpdateManyWithWhereWithoutBy_profileInput | Prisma.ReplyVoteUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
};
export type ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyVoteCreateWithoutBy_profileInput[] | Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput | Prisma.ReplyVoteCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.ReplyVoteUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyVoteUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.ReplyVoteCreateManyBy_profileInputEnvelope;
    set?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    disconnect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    delete?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    update?: Prisma.ReplyVoteUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyVoteUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.ReplyVoteUpdateManyWithWhereWithoutBy_profileInput | Prisma.ReplyVoteUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
};
export type ReplyVoteCreateNestedManyWithoutReplyInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput> | Prisma.ReplyVoteCreateWithoutReplyInput[] | Prisma.ReplyVoteUncheckedCreateWithoutReplyInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutReplyInput | Prisma.ReplyVoteCreateOrConnectWithoutReplyInput[];
    createMany?: Prisma.ReplyVoteCreateManyReplyInputEnvelope;
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
};
export type ReplyVoteUncheckedCreateNestedManyWithoutReplyInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput> | Prisma.ReplyVoteCreateWithoutReplyInput[] | Prisma.ReplyVoteUncheckedCreateWithoutReplyInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutReplyInput | Prisma.ReplyVoteCreateOrConnectWithoutReplyInput[];
    createMany?: Prisma.ReplyVoteCreateManyReplyInputEnvelope;
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
};
export type ReplyVoteUpdateManyWithoutReplyNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput> | Prisma.ReplyVoteCreateWithoutReplyInput[] | Prisma.ReplyVoteUncheckedCreateWithoutReplyInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutReplyInput | Prisma.ReplyVoteCreateOrConnectWithoutReplyInput[];
    upsert?: Prisma.ReplyVoteUpsertWithWhereUniqueWithoutReplyInput | Prisma.ReplyVoteUpsertWithWhereUniqueWithoutReplyInput[];
    createMany?: Prisma.ReplyVoteCreateManyReplyInputEnvelope;
    set?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    disconnect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    delete?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    update?: Prisma.ReplyVoteUpdateWithWhereUniqueWithoutReplyInput | Prisma.ReplyVoteUpdateWithWhereUniqueWithoutReplyInput[];
    updateMany?: Prisma.ReplyVoteUpdateManyWithWhereWithoutReplyInput | Prisma.ReplyVoteUpdateManyWithWhereWithoutReplyInput[];
    deleteMany?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
};
export type ReplyVoteUncheckedUpdateManyWithoutReplyNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput> | Prisma.ReplyVoteCreateWithoutReplyInput[] | Prisma.ReplyVoteUncheckedCreateWithoutReplyInput[];
    connectOrCreate?: Prisma.ReplyVoteCreateOrConnectWithoutReplyInput | Prisma.ReplyVoteCreateOrConnectWithoutReplyInput[];
    upsert?: Prisma.ReplyVoteUpsertWithWhereUniqueWithoutReplyInput | Prisma.ReplyVoteUpsertWithWhereUniqueWithoutReplyInput[];
    createMany?: Prisma.ReplyVoteCreateManyReplyInputEnvelope;
    set?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    disconnect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    delete?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    connect?: Prisma.ReplyVoteWhereUniqueInput | Prisma.ReplyVoteWhereUniqueInput[];
    update?: Prisma.ReplyVoteUpdateWithWhereUniqueWithoutReplyInput | Prisma.ReplyVoteUpdateWithWhereUniqueWithoutReplyInput[];
    updateMany?: Prisma.ReplyVoteUpdateManyWithWhereWithoutReplyInput | Prisma.ReplyVoteUpdateManyWithWhereWithoutReplyInput[];
    deleteMany?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
};
export type ReplyVoteCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    reply: Prisma.ReplyCreateNestedOneWithoutRatingsInput;
};
export type ReplyVoteUncheckedCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reply_id: string;
    vote: boolean;
};
export type ReplyVoteCreateOrConnectWithoutBy_profileInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput>;
};
export type ReplyVoteCreateManyBy_profileInputEnvelope = {
    data: Prisma.ReplyVoteCreateManyBy_profileInput | Prisma.ReplyVoteCreateManyBy_profileInput[];
    skipDuplicates?: boolean;
};
export type ReplyVoteUpsertWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplyVoteUpdateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedUpdateWithoutBy_profileInput>;
    create: Prisma.XOR<Prisma.ReplyVoteCreateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedCreateWithoutBy_profileInput>;
};
export type ReplyVoteUpdateWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateWithoutBy_profileInput, Prisma.ReplyVoteUncheckedUpdateWithoutBy_profileInput>;
};
export type ReplyVoteUpdateManyWithWhereWithoutBy_profileInput = {
    where: Prisma.ReplyVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateManyMutationInput, Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileInput>;
};
export type ReplyVoteScalarWhereInput = {
    AND?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
    OR?: Prisma.ReplyVoteScalarWhereInput[];
    NOT?: Prisma.ReplyVoteScalarWhereInput | Prisma.ReplyVoteScalarWhereInput[];
    id?: Prisma.StringFilter<"ReplyVote"> | string;
    created_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReplyVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"ReplyVote"> | string;
    reply_id?: Prisma.StringFilter<"ReplyVote"> | string;
    vote?: Prisma.BoolFilter<"ReplyVote"> | boolean;
};
export type ReplyVoteCreateWithoutReplyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutReply_votesInput;
};
export type ReplyVoteUncheckedCreateWithoutReplyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    vote: boolean;
};
export type ReplyVoteCreateOrConnectWithoutReplyInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput>;
};
export type ReplyVoteCreateManyReplyInputEnvelope = {
    data: Prisma.ReplyVoteCreateManyReplyInput | Prisma.ReplyVoteCreateManyReplyInput[];
    skipDuplicates?: boolean;
};
export type ReplyVoteUpsertWithWhereUniqueWithoutReplyInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplyVoteUpdateWithoutReplyInput, Prisma.ReplyVoteUncheckedUpdateWithoutReplyInput>;
    create: Prisma.XOR<Prisma.ReplyVoteCreateWithoutReplyInput, Prisma.ReplyVoteUncheckedCreateWithoutReplyInput>;
};
export type ReplyVoteUpdateWithWhereUniqueWithoutReplyInput = {
    where: Prisma.ReplyVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateWithoutReplyInput, Prisma.ReplyVoteUncheckedUpdateWithoutReplyInput>;
};
export type ReplyVoteUpdateManyWithWhereWithoutReplyInput = {
    where: Prisma.ReplyVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateManyMutationInput, Prisma.ReplyVoteUncheckedUpdateManyWithoutReplyInput>;
};
export type ReplyVoteCreateManyBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reply_id: string;
    vote: boolean;
};
export type ReplyVoteUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reply?: Prisma.ReplyUpdateOneRequiredWithoutRatingsNestedInput;
};
export type ReplyVoteUncheckedUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reply_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteUncheckedUpdateManyWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reply_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteCreateManyReplyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    vote: boolean;
};
export type ReplyVoteUpdateWithoutReplyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutReply_votesNestedInput;
};
export type ReplyVoteUncheckedUpdateWithoutReplyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteUncheckedUpdateManyWithoutReplyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    reply_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replyVote"]>;
export type ReplyVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    reply_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replyVote"]>;
export type ReplyVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    reply_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replyVote"]>;
export type ReplyVoteSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    reply_id?: boolean;
    vote?: boolean;
};
export type ReplyVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "by_profile_id" | "reply_id" | "vote", ExtArgs["result"]["replyVote"]>;
export type ReplyVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
};
export type ReplyVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
};
export type ReplyVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    reply?: boolean | Prisma.ReplyDefaultArgs<ExtArgs>;
};
export type $ReplyVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReplyVote";
    objects: {
        by_profile: Prisma.$ProfilePayload<ExtArgs>;
        reply: Prisma.$ReplyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        by_profile_id: string;
        reply_id: string;
        vote: boolean;
    }, ExtArgs["result"]["replyVote"]>;
    composites: {};
};
export type ReplyVoteGetPayload<S extends boolean | null | undefined | ReplyVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload, S>;
export type ReplyVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReplyVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReplyVoteCountAggregateInputType | true;
};
export interface ReplyVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReplyVote'];
        meta: {
            name: 'ReplyVote';
        };
    };
    findUnique<T extends ReplyVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, ReplyVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReplyVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReplyVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReplyVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, ReplyVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReplyVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReplyVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReplyVoteFindManyArgs>(args?: Prisma.SelectSubset<T, ReplyVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReplyVoteCreateArgs>(args: Prisma.SelectSubset<T, ReplyVoteCreateArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReplyVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, ReplyVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReplyVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReplyVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReplyVoteDeleteArgs>(args: Prisma.SelectSubset<T, ReplyVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReplyVoteUpdateArgs>(args: Prisma.SelectSubset<T, ReplyVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReplyVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReplyVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReplyVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, ReplyVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReplyVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReplyVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReplyVoteUpsertArgs>(args: Prisma.SelectSubset<T, ReplyVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__ReplyVoteClient<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReplyVoteCountArgs>(args?: Prisma.Subset<T, ReplyVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReplyVoteCountAggregateOutputType> : number>;
    aggregate<T extends ReplyVoteAggregateArgs>(args: Prisma.Subset<T, ReplyVoteAggregateArgs>): Prisma.PrismaPromise<GetReplyVoteAggregateType<T>>;
    groupBy<T extends ReplyVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReplyVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: ReplyVoteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReplyVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReplyVoteFieldRefs;
}
export interface Prisma__ReplyVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reply<T extends Prisma.ReplyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReplyDefaultArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReplyVoteFieldRefs {
    readonly id: Prisma.FieldRef<"ReplyVote", 'String'>;
    readonly created_at: Prisma.FieldRef<"ReplyVote", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"ReplyVote", 'DateTime'>;
    readonly by_profile_id: Prisma.FieldRef<"ReplyVote", 'String'>;
    readonly reply_id: Prisma.FieldRef<"ReplyVote", 'String'>;
    readonly vote: Prisma.FieldRef<"ReplyVote", 'Boolean'>;
}
export type ReplyVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where: Prisma.ReplyVoteWhereUniqueInput;
};
export type ReplyVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where: Prisma.ReplyVoteWhereUniqueInput;
};
export type ReplyVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithRelationInput | Prisma.ReplyVoteOrderByWithRelationInput[];
    cursor?: Prisma.ReplyVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplyVoteScalarFieldEnum | Prisma.ReplyVoteScalarFieldEnum[];
};
export type ReplyVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithRelationInput | Prisma.ReplyVoteOrderByWithRelationInput[];
    cursor?: Prisma.ReplyVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplyVoteScalarFieldEnum | Prisma.ReplyVoteScalarFieldEnum[];
};
export type ReplyVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithRelationInput | Prisma.ReplyVoteOrderByWithRelationInput[];
    cursor?: Prisma.ReplyVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplyVoteScalarFieldEnum | Prisma.ReplyVoteScalarFieldEnum[];
};
export type ReplyVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyVoteCreateInput, Prisma.ReplyVoteUncheckedCreateInput>;
};
export type ReplyVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReplyVoteCreateManyInput | Prisma.ReplyVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReplyVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    data: Prisma.ReplyVoteCreateManyInput | Prisma.ReplyVoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReplyVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReplyVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateInput, Prisma.ReplyVoteUncheckedUpdateInput>;
    where: Prisma.ReplyVoteWhereUniqueInput;
};
export type ReplyVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReplyVoteUpdateManyMutationInput, Prisma.ReplyVoteUncheckedUpdateManyInput>;
    where?: Prisma.ReplyVoteWhereInput;
    limit?: number;
};
export type ReplyVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyVoteUpdateManyMutationInput, Prisma.ReplyVoteUncheckedUpdateManyInput>;
    where?: Prisma.ReplyVoteWhereInput;
    limit?: number;
    include?: Prisma.ReplyVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReplyVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where: Prisma.ReplyVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyVoteCreateInput, Prisma.ReplyVoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReplyVoteUpdateInput, Prisma.ReplyVoteUncheckedUpdateInput>;
};
export type ReplyVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where: Prisma.ReplyVoteWhereUniqueInput;
};
export type ReplyVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyVoteWhereInput;
    limit?: number;
};
export type ReplyVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ReplyVote.d.ts.map