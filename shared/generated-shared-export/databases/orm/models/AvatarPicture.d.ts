import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AvatarPictureModel = runtime.Types.Result.DefaultSelection<Prisma.$AvatarPicturePayload>;
export type AggregateAvatarPicture = {
    _count: AvatarPictureCountAggregateOutputType | null;
    _min: AvatarPictureMinAggregateOutputType | null;
    _max: AvatarPictureMaxAggregateOutputType | null;
};
export type AvatarPictureMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    url: string | null;
    by_profile_id: string | null;
};
export type AvatarPictureMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    url: string | null;
    by_profile_id: string | null;
};
export type AvatarPictureCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    url: number;
    by_profile_id: number;
    _all: number;
};
export type AvatarPictureMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
};
export type AvatarPictureMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
};
export type AvatarPictureCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
    _all?: true;
};
export type AvatarPictureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvatarPictureWhereInput;
    orderBy?: Prisma.AvatarPictureOrderByWithRelationInput | Prisma.AvatarPictureOrderByWithRelationInput[];
    cursor?: Prisma.AvatarPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvatarPictureCountAggregateInputType;
    _min?: AvatarPictureMinAggregateInputType;
    _max?: AvatarPictureMaxAggregateInputType;
};
export type GetAvatarPictureAggregateType<T extends AvatarPictureAggregateArgs> = {
    [P in keyof T & keyof AggregateAvatarPicture]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvatarPicture[P]> : Prisma.GetScalarType<T[P], AggregateAvatarPicture[P]>;
};
export type AvatarPictureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvatarPictureWhereInput;
    orderBy?: Prisma.AvatarPictureOrderByWithAggregationInput | Prisma.AvatarPictureOrderByWithAggregationInput[];
    by: Prisma.AvatarPictureScalarFieldEnum[] | Prisma.AvatarPictureScalarFieldEnum;
    having?: Prisma.AvatarPictureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvatarPictureCountAggregateInputType | true;
    _min?: AvatarPictureMinAggregateInputType;
    _max?: AvatarPictureMaxAggregateInputType;
};
export type AvatarPictureGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    url: string;
    by_profile_id: string;
    _count: AvatarPictureCountAggregateOutputType | null;
    _min: AvatarPictureMinAggregateOutputType | null;
    _max: AvatarPictureMaxAggregateOutputType | null;
};
type GetAvatarPictureGroupByPayload<T extends AvatarPictureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvatarPictureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvatarPictureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvatarPictureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvatarPictureGroupByOutputType[P]>;
}>>;
export type AvatarPictureWhereInput = {
    AND?: Prisma.AvatarPictureWhereInput | Prisma.AvatarPictureWhereInput[];
    OR?: Prisma.AvatarPictureWhereInput[];
    NOT?: Prisma.AvatarPictureWhereInput | Prisma.AvatarPictureWhereInput[];
    id?: Prisma.StringFilter<"AvatarPicture"> | string;
    created_at?: Prisma.DateTimeFilter<"AvatarPicture"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AvatarPicture"> | Date | string;
    url?: Prisma.StringFilter<"AvatarPicture"> | string;
    by_profile_id?: Prisma.StringFilter<"AvatarPicture"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type AvatarPictureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    by_profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type AvatarPictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    by_profile_id?: string;
    AND?: Prisma.AvatarPictureWhereInput | Prisma.AvatarPictureWhereInput[];
    OR?: Prisma.AvatarPictureWhereInput[];
    NOT?: Prisma.AvatarPictureWhereInput | Prisma.AvatarPictureWhereInput[];
    created_at?: Prisma.DateTimeFilter<"AvatarPicture"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AvatarPicture"> | Date | string;
    url?: Prisma.StringFilter<"AvatarPicture"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "by_profile_id">;
export type AvatarPictureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    _count?: Prisma.AvatarPictureCountOrderByAggregateInput;
    _max?: Prisma.AvatarPictureMaxOrderByAggregateInput;
    _min?: Prisma.AvatarPictureMinOrderByAggregateInput;
};
export type AvatarPictureScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvatarPictureScalarWhereWithAggregatesInput | Prisma.AvatarPictureScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvatarPictureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvatarPictureScalarWhereWithAggregatesInput | Prisma.AvatarPictureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvatarPicture"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AvatarPicture"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"AvatarPicture"> | Date | string;
    url?: Prisma.StringWithAggregatesFilter<"AvatarPicture"> | string;
    by_profile_id?: Prisma.StringWithAggregatesFilter<"AvatarPicture"> | string;
};
export type AvatarPictureCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile: Prisma.ProfileCreateNestedOneWithoutAvatarInput;
};
export type AvatarPictureUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile_id: string;
};
export type AvatarPictureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutAvatarNestedInput;
};
export type AvatarPictureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvatarPictureCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile_id: string;
};
export type AvatarPictureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvatarPictureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvatarPictureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type AvatarPictureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type AvatarPictureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type AvatarPictureNullableScalarRelationFilter = {
    is?: Prisma.AvatarPictureWhereInput | null;
    isNot?: Prisma.AvatarPictureWhereInput | null;
};
export type AvatarPictureCreateNestedOneWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.AvatarPictureCreateOrConnectWithoutBy_profileInput;
    connect?: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.AvatarPictureCreateOrConnectWithoutBy_profileInput;
    connect?: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureUpdateOneWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.AvatarPictureCreateOrConnectWithoutBy_profileInput;
    upsert?: Prisma.AvatarPictureUpsertWithoutBy_profileInput;
    disconnect?: Prisma.AvatarPictureWhereInput | boolean;
    delete?: Prisma.AvatarPictureWhereInput | boolean;
    connect?: Prisma.AvatarPictureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AvatarPictureUpdateToOneWithWhereWithoutBy_profileInput, Prisma.AvatarPictureUpdateWithoutBy_profileInput>, Prisma.AvatarPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.AvatarPictureCreateOrConnectWithoutBy_profileInput;
    upsert?: Prisma.AvatarPictureUpsertWithoutBy_profileInput;
    disconnect?: Prisma.AvatarPictureWhereInput | boolean;
    delete?: Prisma.AvatarPictureWhereInput | boolean;
    connect?: Prisma.AvatarPictureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AvatarPictureUpdateToOneWithWhereWithoutBy_profileInput, Prisma.AvatarPictureUpdateWithoutBy_profileInput>, Prisma.AvatarPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type AvatarPictureCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
};
export type AvatarPictureUncheckedCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
};
export type AvatarPictureCreateOrConnectWithoutBy_profileInput = {
    where: Prisma.AvatarPictureWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
};
export type AvatarPictureUpsertWithoutBy_profileInput = {
    update: Prisma.XOR<Prisma.AvatarPictureUpdateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedUpdateWithoutBy_profileInput>;
    create: Prisma.XOR<Prisma.AvatarPictureCreateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedCreateWithoutBy_profileInput>;
    where?: Prisma.AvatarPictureWhereInput;
};
export type AvatarPictureUpdateToOneWithWhereWithoutBy_profileInput = {
    where?: Prisma.AvatarPictureWhereInput;
    data: Prisma.XOR<Prisma.AvatarPictureUpdateWithoutBy_profileInput, Prisma.AvatarPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type AvatarPictureUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvatarPictureUncheckedUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvatarPictureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarPicture"]>;
export type AvatarPictureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarPicture"]>;
export type AvatarPictureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarPicture"]>;
export type AvatarPictureSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
};
export type AvatarPictureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "url" | "by_profile_id", ExtArgs["result"]["avatarPicture"]>;
export type AvatarPictureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AvatarPictureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AvatarPictureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $AvatarPicturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvatarPicture";
    objects: {
        by_profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        url: string;
        by_profile_id: string;
    }, ExtArgs["result"]["avatarPicture"]>;
    composites: {};
};
export type AvatarPictureGetPayload<S extends boolean | null | undefined | AvatarPictureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload, S>;
export type AvatarPictureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvatarPictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvatarPictureCountAggregateInputType | true;
};
export interface AvatarPictureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvatarPicture'];
        meta: {
            name: 'AvatarPicture';
        };
    };
    findUnique<T extends AvatarPictureFindUniqueArgs>(args: Prisma.SelectSubset<T, AvatarPictureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvatarPictureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvatarPictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvatarPictureFindFirstArgs>(args?: Prisma.SelectSubset<T, AvatarPictureFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvatarPictureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvatarPictureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvatarPictureFindManyArgs>(args?: Prisma.SelectSubset<T, AvatarPictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvatarPictureCreateArgs>(args: Prisma.SelectSubset<T, AvatarPictureCreateArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvatarPictureCreateManyArgs>(args?: Prisma.SelectSubset<T, AvatarPictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AvatarPictureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvatarPictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AvatarPictureDeleteArgs>(args: Prisma.SelectSubset<T, AvatarPictureDeleteArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvatarPictureUpdateArgs>(args: Prisma.SelectSubset<T, AvatarPictureUpdateArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvatarPictureDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvatarPictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvatarPictureUpdateManyArgs>(args: Prisma.SelectSubset<T, AvatarPictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AvatarPictureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvatarPictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AvatarPictureUpsertArgs>(args: Prisma.SelectSubset<T, AvatarPictureUpsertArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvatarPictureCountArgs>(args?: Prisma.Subset<T, AvatarPictureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvatarPictureCountAggregateOutputType> : number>;
    aggregate<T extends AvatarPictureAggregateArgs>(args: Prisma.Subset<T, AvatarPictureAggregateArgs>): Prisma.PrismaPromise<GetAvatarPictureAggregateType<T>>;
    groupBy<T extends AvatarPictureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvatarPictureGroupByArgs['orderBy'];
    } : {
        orderBy?: AvatarPictureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvatarPictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvatarPictureFieldRefs;
}
export interface Prisma__AvatarPictureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvatarPictureFieldRefs {
    readonly id: Prisma.FieldRef<"AvatarPicture", 'String'>;
    readonly created_at: Prisma.FieldRef<"AvatarPicture", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"AvatarPicture", 'DateTime'>;
    readonly url: Prisma.FieldRef<"AvatarPicture", 'String'>;
    readonly by_profile_id: Prisma.FieldRef<"AvatarPicture", 'String'>;
}
export type AvatarPictureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where?: Prisma.AvatarPictureWhereInput;
    orderBy?: Prisma.AvatarPictureOrderByWithRelationInput | Prisma.AvatarPictureOrderByWithRelationInput[];
    cursor?: Prisma.AvatarPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvatarPictureScalarFieldEnum | Prisma.AvatarPictureScalarFieldEnum[];
};
export type AvatarPictureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where?: Prisma.AvatarPictureWhereInput;
    orderBy?: Prisma.AvatarPictureOrderByWithRelationInput | Prisma.AvatarPictureOrderByWithRelationInput[];
    cursor?: Prisma.AvatarPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvatarPictureScalarFieldEnum | Prisma.AvatarPictureScalarFieldEnum[];
};
export type AvatarPictureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where?: Prisma.AvatarPictureWhereInput;
    orderBy?: Prisma.AvatarPictureOrderByWithRelationInput | Prisma.AvatarPictureOrderByWithRelationInput[];
    cursor?: Prisma.AvatarPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvatarPictureScalarFieldEnum | Prisma.AvatarPictureScalarFieldEnum[];
};
export type AvatarPictureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvatarPictureCreateInput, Prisma.AvatarPictureUncheckedCreateInput>;
};
export type AvatarPictureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvatarPictureCreateManyInput | Prisma.AvatarPictureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvatarPictureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    data: Prisma.AvatarPictureCreateManyInput | Prisma.AvatarPictureCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AvatarPictureIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AvatarPictureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvatarPictureUpdateInput, Prisma.AvatarPictureUncheckedUpdateInput>;
    where: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvatarPictureUpdateManyMutationInput, Prisma.AvatarPictureUncheckedUpdateManyInput>;
    where?: Prisma.AvatarPictureWhereInput;
    limit?: number;
};
export type AvatarPictureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvatarPictureUpdateManyMutationInput, Prisma.AvatarPictureUncheckedUpdateManyInput>;
    where?: Prisma.AvatarPictureWhereInput;
    limit?: number;
    include?: Prisma.AvatarPictureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AvatarPictureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where: Prisma.AvatarPictureWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvatarPictureCreateInput, Prisma.AvatarPictureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvatarPictureUpdateInput, Prisma.AvatarPictureUncheckedUpdateInput>;
};
export type AvatarPictureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where: Prisma.AvatarPictureWhereUniqueInput;
};
export type AvatarPictureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvatarPictureWhereInput;
    limit?: number;
};
export type AvatarPictureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AvatarPicture.d.ts.map