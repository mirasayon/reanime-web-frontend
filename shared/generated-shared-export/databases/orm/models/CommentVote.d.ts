import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CommentVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentVotePayload>;
export type AggregateCommentVote = {
    _count: CommentVoteCountAggregateOutputType | null;
    _min: CommentVoteMinAggregateOutputType | null;
    _max: CommentVoteMaxAggregateOutputType | null;
};
export type CommentVoteMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    by_profile_id: string | null;
    comment_id: string | null;
    vote: boolean | null;
};
export type CommentVoteMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    by_profile_id: string | null;
    comment_id: string | null;
    vote: boolean | null;
};
export type CommentVoteCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    by_profile_id: number;
    comment_id: number;
    vote: number;
    _all: number;
};
export type CommentVoteMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    comment_id?: true;
    vote?: true;
};
export type CommentVoteMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    comment_id?: true;
    vote?: true;
};
export type CommentVoteCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    by_profile_id?: true;
    comment_id?: true;
    vote?: true;
    _all?: true;
};
export type CommentVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithRelationInput | Prisma.CommentVoteOrderByWithRelationInput[];
    cursor?: Prisma.CommentVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentVoteCountAggregateInputType;
    _min?: CommentVoteMinAggregateInputType;
    _max?: CommentVoteMaxAggregateInputType;
};
export type GetCommentVoteAggregateType<T extends CommentVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateCommentVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommentVote[P]> : Prisma.GetScalarType<T[P], AggregateCommentVote[P]>;
};
export type CommentVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithAggregationInput | Prisma.CommentVoteOrderByWithAggregationInput[];
    by: Prisma.CommentVoteScalarFieldEnum[] | Prisma.CommentVoteScalarFieldEnum;
    having?: Prisma.CommentVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentVoteCountAggregateInputType | true;
    _min?: CommentVoteMinAggregateInputType;
    _max?: CommentVoteMaxAggregateInputType;
};
export type CommentVoteGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    by_profile_id: string;
    comment_id: string;
    vote: boolean;
    _count: CommentVoteCountAggregateOutputType | null;
    _min: CommentVoteMinAggregateOutputType | null;
    _max: CommentVoteMaxAggregateOutputType | null;
};
type GetCommentVoteGroupByPayload<T extends CommentVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentVoteGroupByOutputType[P]>;
}>>;
export type CommentVoteWhereInput = {
    AND?: Prisma.CommentVoteWhereInput | Prisma.CommentVoteWhereInput[];
    OR?: Prisma.CommentVoteWhereInput[];
    NOT?: Prisma.CommentVoteWhereInput | Prisma.CommentVoteWhereInput[];
    id?: Prisma.StringFilter<"CommentVote"> | string;
    created_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"CommentVote"> | string;
    comment_id?: Prisma.StringFilter<"CommentVote"> | string;
    vote?: Prisma.BoolFilter<"CommentVote"> | boolean;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
};
export type CommentVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    by_profile?: Prisma.ProfileOrderByWithRelationInput;
    comment?: Prisma.CommentOrderByWithRelationInput;
};
export type CommentVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    by_profile_id_comment_id?: Prisma.CommentVoteBy_profile_idComment_idCompoundUniqueInput;
    AND?: Prisma.CommentVoteWhereInput | Prisma.CommentVoteWhereInput[];
    OR?: Prisma.CommentVoteWhereInput[];
    NOT?: Prisma.CommentVoteWhereInput | Prisma.CommentVoteWhereInput[];
    created_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"CommentVote"> | string;
    comment_id?: Prisma.StringFilter<"CommentVote"> | string;
    vote?: Prisma.BoolFilter<"CommentVote"> | boolean;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
}, "id" | "by_profile_id_comment_id">;
export type CommentVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    _count?: Prisma.CommentVoteCountOrderByAggregateInput;
    _max?: Prisma.CommentVoteMaxOrderByAggregateInput;
    _min?: Prisma.CommentVoteMinOrderByAggregateInput;
};
export type CommentVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentVoteScalarWhereWithAggregatesInput | Prisma.CommentVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentVoteScalarWhereWithAggregatesInput | Prisma.CommentVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommentVote"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CommentVote"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"CommentVote"> | Date | string;
    by_profile_id?: Prisma.StringWithAggregatesFilter<"CommentVote"> | string;
    comment_id?: Prisma.StringWithAggregatesFilter<"CommentVote"> | string;
    vote?: Prisma.BoolWithAggregatesFilter<"CommentVote"> | boolean;
};
export type CommentVoteCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutComment_votesInput;
    comment: Prisma.CommentCreateNestedOneWithoutRatingsInput;
};
export type CommentVoteUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    comment_id: string;
    vote: boolean;
};
export type CommentVoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutComment_votesNestedInput;
    comment?: Prisma.CommentUpdateOneRequiredWithoutRatingsNestedInput;
};
export type CommentVoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    comment_id: string;
    vote: boolean;
};
export type CommentVoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteListRelationFilter = {
    every?: Prisma.CommentVoteWhereInput;
    some?: Prisma.CommentVoteWhereInput;
    none?: Prisma.CommentVoteWhereInput;
};
export type CommentVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommentVoteBy_profile_idComment_idCompoundUniqueInput = {
    by_profile_id: string;
    comment_id: string;
};
export type CommentVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type CommentVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type CommentVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
};
export type CommentVoteCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput> | Prisma.CommentVoteCreateWithoutBy_profileInput[] | Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput | Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.CommentVoteCreateManyBy_profileInputEnvelope;
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
};
export type CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput> | Prisma.CommentVoteCreateWithoutBy_profileInput[] | Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput | Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.CommentVoteCreateManyBy_profileInputEnvelope;
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
};
export type CommentVoteUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput> | Prisma.CommentVoteCreateWithoutBy_profileInput[] | Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput | Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.CommentVoteUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.CommentVoteUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.CommentVoteCreateManyBy_profileInputEnvelope;
    set?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    disconnect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    delete?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    update?: Prisma.CommentVoteUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.CommentVoteUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.CommentVoteUpdateManyWithWhereWithoutBy_profileInput | Prisma.CommentVoteUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
};
export type CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput> | Prisma.CommentVoteCreateWithoutBy_profileInput[] | Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput | Prisma.CommentVoteCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.CommentVoteUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.CommentVoteUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.CommentVoteCreateManyBy_profileInputEnvelope;
    set?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    disconnect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    delete?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    update?: Prisma.CommentVoteUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.CommentVoteUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.CommentVoteUpdateManyWithWhereWithoutBy_profileInput | Prisma.CommentVoteUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
};
export type CommentVoteCreateNestedManyWithoutCommentInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput> | Prisma.CommentVoteCreateWithoutCommentInput[] | Prisma.CommentVoteUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutCommentInput | Prisma.CommentVoteCreateOrConnectWithoutCommentInput[];
    createMany?: Prisma.CommentVoteCreateManyCommentInputEnvelope;
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
};
export type CommentVoteUncheckedCreateNestedManyWithoutCommentInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput> | Prisma.CommentVoteCreateWithoutCommentInput[] | Prisma.CommentVoteUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutCommentInput | Prisma.CommentVoteCreateOrConnectWithoutCommentInput[];
    createMany?: Prisma.CommentVoteCreateManyCommentInputEnvelope;
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
};
export type CommentVoteUpdateManyWithoutCommentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput> | Prisma.CommentVoteCreateWithoutCommentInput[] | Prisma.CommentVoteUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutCommentInput | Prisma.CommentVoteCreateOrConnectWithoutCommentInput[];
    upsert?: Prisma.CommentVoteUpsertWithWhereUniqueWithoutCommentInput | Prisma.CommentVoteUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: Prisma.CommentVoteCreateManyCommentInputEnvelope;
    set?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    disconnect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    delete?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    update?: Prisma.CommentVoteUpdateWithWhereUniqueWithoutCommentInput | Prisma.CommentVoteUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?: Prisma.CommentVoteUpdateManyWithWhereWithoutCommentInput | Prisma.CommentVoteUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
};
export type CommentVoteUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput> | Prisma.CommentVoteCreateWithoutCommentInput[] | Prisma.CommentVoteUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentVoteCreateOrConnectWithoutCommentInput | Prisma.CommentVoteCreateOrConnectWithoutCommentInput[];
    upsert?: Prisma.CommentVoteUpsertWithWhereUniqueWithoutCommentInput | Prisma.CommentVoteUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: Prisma.CommentVoteCreateManyCommentInputEnvelope;
    set?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    disconnect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    delete?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    connect?: Prisma.CommentVoteWhereUniqueInput | Prisma.CommentVoteWhereUniqueInput[];
    update?: Prisma.CommentVoteUpdateWithWhereUniqueWithoutCommentInput | Prisma.CommentVoteUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?: Prisma.CommentVoteUpdateManyWithWhereWithoutCommentInput | Prisma.CommentVoteUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
};
export type CommentVoteCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    comment: Prisma.CommentCreateNestedOneWithoutRatingsInput;
};
export type CommentVoteUncheckedCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    comment_id: string;
    vote: boolean;
};
export type CommentVoteCreateOrConnectWithoutBy_profileInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput>;
};
export type CommentVoteCreateManyBy_profileInputEnvelope = {
    data: Prisma.CommentVoteCreateManyBy_profileInput | Prisma.CommentVoteCreateManyBy_profileInput[];
    skipDuplicates?: boolean;
};
export type CommentVoteUpsertWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentVoteUpdateWithoutBy_profileInput, Prisma.CommentVoteUncheckedUpdateWithoutBy_profileInput>;
    create: Prisma.XOR<Prisma.CommentVoteCreateWithoutBy_profileInput, Prisma.CommentVoteUncheckedCreateWithoutBy_profileInput>;
};
export type CommentVoteUpdateWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentVoteUpdateWithoutBy_profileInput, Prisma.CommentVoteUncheckedUpdateWithoutBy_profileInput>;
};
export type CommentVoteUpdateManyWithWhereWithoutBy_profileInput = {
    where: Prisma.CommentVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentVoteUpdateManyMutationInput, Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileInput>;
};
export type CommentVoteScalarWhereInput = {
    AND?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
    OR?: Prisma.CommentVoteScalarWhereInput[];
    NOT?: Prisma.CommentVoteScalarWhereInput | Prisma.CommentVoteScalarWhereInput[];
    id?: Prisma.StringFilter<"CommentVote"> | string;
    created_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CommentVote"> | Date | string;
    by_profile_id?: Prisma.StringFilter<"CommentVote"> | string;
    comment_id?: Prisma.StringFilter<"CommentVote"> | string;
    vote?: Prisma.BoolFilter<"CommentVote"> | boolean;
};
export type CommentVoteCreateWithoutCommentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutComment_votesInput;
};
export type CommentVoteUncheckedCreateWithoutCommentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    vote: boolean;
};
export type CommentVoteCreateOrConnectWithoutCommentInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput>;
};
export type CommentVoteCreateManyCommentInputEnvelope = {
    data: Prisma.CommentVoteCreateManyCommentInput | Prisma.CommentVoteCreateManyCommentInput[];
    skipDuplicates?: boolean;
};
export type CommentVoteUpsertWithWhereUniqueWithoutCommentInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentVoteUpdateWithoutCommentInput, Prisma.CommentVoteUncheckedUpdateWithoutCommentInput>;
    create: Prisma.XOR<Prisma.CommentVoteCreateWithoutCommentInput, Prisma.CommentVoteUncheckedCreateWithoutCommentInput>;
};
export type CommentVoteUpdateWithWhereUniqueWithoutCommentInput = {
    where: Prisma.CommentVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentVoteUpdateWithoutCommentInput, Prisma.CommentVoteUncheckedUpdateWithoutCommentInput>;
};
export type CommentVoteUpdateManyWithWhereWithoutCommentInput = {
    where: Prisma.CommentVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentVoteUpdateManyMutationInput, Prisma.CommentVoteUncheckedUpdateManyWithoutCommentInput>;
};
export type CommentVoteCreateManyBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    comment_id: string;
    vote: boolean;
};
export type CommentVoteUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    comment?: Prisma.CommentUpdateOneRequiredWithoutRatingsNestedInput;
};
export type CommentVoteUncheckedUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteUncheckedUpdateManyWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteCreateManyCommentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    by_profile_id: string;
    vote: boolean;
};
export type CommentVoteUpdateWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutComment_votesNestedInput;
};
export type CommentVoteUncheckedUpdateWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteUncheckedUpdateManyWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CommentVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    comment_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentVote"]>;
export type CommentVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    comment_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentVote"]>;
export type CommentVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    comment_id?: boolean;
    vote?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentVote"]>;
export type CommentVoteSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    by_profile_id?: boolean;
    comment_id?: boolean;
    vote?: boolean;
};
export type CommentVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "by_profile_id" | "comment_id" | "vote", ExtArgs["result"]["commentVote"]>;
export type CommentVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type CommentVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type CommentVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type $CommentVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommentVote";
    objects: {
        by_profile: Prisma.$ProfilePayload<ExtArgs>;
        comment: Prisma.$CommentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        by_profile_id: string;
        comment_id: string;
        vote: boolean;
    }, ExtArgs["result"]["commentVote"]>;
    composites: {};
};
export type CommentVoteGetPayload<S extends boolean | null | undefined | CommentVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentVotePayload, S>;
export type CommentVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentVoteCountAggregateInputType | true;
};
export interface CommentVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommentVote'];
        meta: {
            name: 'CommentVote';
        };
    };
    findUnique<T extends CommentVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommentVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommentVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommentVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommentVoteFindManyArgs>(args?: Prisma.SelectSubset<T, CommentVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommentVoteCreateArgs>(args: Prisma.SelectSubset<T, CommentVoteCreateArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommentVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommentVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommentVoteDeleteArgs>(args: Prisma.SelectSubset<T, CommentVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommentVoteUpdateArgs>(args: Prisma.SelectSubset<T, CommentVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommentVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommentVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommentVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommentVoteUpsertArgs>(args: Prisma.SelectSubset<T, CommentVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentVoteClient<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommentVoteCountArgs>(args?: Prisma.Subset<T, CommentVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentVoteCountAggregateOutputType> : number>;
    aggregate<T extends CommentVoteAggregateArgs>(args: Prisma.Subset<T, CommentVoteAggregateArgs>): Prisma.PrismaPromise<GetCommentVoteAggregateType<T>>;
    groupBy<T extends CommentVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentVoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommentVoteFieldRefs;
}
export interface Prisma__CommentVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comment<T extends Prisma.CommentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommentDefaultArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommentVoteFieldRefs {
    readonly id: Prisma.FieldRef<"CommentVote", 'String'>;
    readonly created_at: Prisma.FieldRef<"CommentVote", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"CommentVote", 'DateTime'>;
    readonly by_profile_id: Prisma.FieldRef<"CommentVote", 'String'>;
    readonly comment_id: Prisma.FieldRef<"CommentVote", 'String'>;
    readonly vote: Prisma.FieldRef<"CommentVote", 'Boolean'>;
}
export type CommentVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where: Prisma.CommentVoteWhereUniqueInput;
};
export type CommentVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where: Prisma.CommentVoteWhereUniqueInput;
};
export type CommentVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithRelationInput | Prisma.CommentVoteOrderByWithRelationInput[];
    cursor?: Prisma.CommentVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentVoteScalarFieldEnum | Prisma.CommentVoteScalarFieldEnum[];
};
export type CommentVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithRelationInput | Prisma.CommentVoteOrderByWithRelationInput[];
    cursor?: Prisma.CommentVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentVoteScalarFieldEnum | Prisma.CommentVoteScalarFieldEnum[];
};
export type CommentVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithRelationInput | Prisma.CommentVoteOrderByWithRelationInput[];
    cursor?: Prisma.CommentVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentVoteScalarFieldEnum | Prisma.CommentVoteScalarFieldEnum[];
};
export type CommentVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentVoteCreateInput, Prisma.CommentVoteUncheckedCreateInput>;
};
export type CommentVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommentVoteCreateManyInput | Prisma.CommentVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    data: Prisma.CommentVoteCreateManyInput | Prisma.CommentVoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CommentVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CommentVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentVoteUpdateInput, Prisma.CommentVoteUncheckedUpdateInput>;
    where: Prisma.CommentVoteWhereUniqueInput;
};
export type CommentVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommentVoteUpdateManyMutationInput, Prisma.CommentVoteUncheckedUpdateManyInput>;
    where?: Prisma.CommentVoteWhereInput;
    limit?: number;
};
export type CommentVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentVoteUpdateManyMutationInput, Prisma.CommentVoteUncheckedUpdateManyInput>;
    where?: Prisma.CommentVoteWhereInput;
    limit?: number;
    include?: Prisma.CommentVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CommentVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where: Prisma.CommentVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentVoteCreateInput, Prisma.CommentVoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommentVoteUpdateInput, Prisma.CommentVoteUncheckedUpdateInput>;
};
export type CommentVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where: Prisma.CommentVoteWhereUniqueInput;
};
export type CommentVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentVoteWhereInput;
    limit?: number;
};
export type CommentVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CommentVote.d.ts.map