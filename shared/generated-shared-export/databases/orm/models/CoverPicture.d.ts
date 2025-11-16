import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CoverPictureModel = runtime.Types.Result.DefaultSelection<Prisma.$CoverPicturePayload>;
export type AggregateCoverPicture = {
    _count: CoverPictureCountAggregateOutputType | null;
    _min: CoverPictureMinAggregateOutputType | null;
    _max: CoverPictureMaxAggregateOutputType | null;
};
export type CoverPictureMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    url: string | null;
    by_profile_id: string | null;
};
export type CoverPictureMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    url: string | null;
    by_profile_id: string | null;
};
export type CoverPictureCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    url: number;
    by_profile_id: number;
    _all: number;
};
export type CoverPictureMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
};
export type CoverPictureMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
};
export type CoverPictureCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    url?: true;
    by_profile_id?: true;
    _all?: true;
};
export type CoverPictureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoverPictureWhereInput;
    orderBy?: Prisma.CoverPictureOrderByWithRelationInput | Prisma.CoverPictureOrderByWithRelationInput[];
    cursor?: Prisma.CoverPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CoverPictureCountAggregateInputType;
    _min?: CoverPictureMinAggregateInputType;
    _max?: CoverPictureMaxAggregateInputType;
};
export type GetCoverPictureAggregateType<T extends CoverPictureAggregateArgs> = {
    [P in keyof T & keyof AggregateCoverPicture]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoverPicture[P]> : Prisma.GetScalarType<T[P], AggregateCoverPicture[P]>;
};
export type CoverPictureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoverPictureWhereInput;
    orderBy?: Prisma.CoverPictureOrderByWithAggregationInput | Prisma.CoverPictureOrderByWithAggregationInput[];
    by: Prisma.CoverPictureScalarFieldEnum[] | Prisma.CoverPictureScalarFieldEnum;
    having?: Prisma.CoverPictureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoverPictureCountAggregateInputType | true;
    _min?: CoverPictureMinAggregateInputType;
    _max?: CoverPictureMaxAggregateInputType;
};
export type CoverPictureGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    url: string;
    by_profile_id: string;
    _count: CoverPictureCountAggregateOutputType | null;
    _min: CoverPictureMinAggregateOutputType | null;
    _max: CoverPictureMaxAggregateOutputType | null;
};
type GetCoverPictureGroupByPayload<T extends CoverPictureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CoverPictureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CoverPictureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CoverPictureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CoverPictureGroupByOutputType[P]>;
}>>;
export type CoverPictureWhereInput = {
    AND?: Prisma.CoverPictureWhereInput | Prisma.CoverPictureWhereInput[];
    OR?: Prisma.CoverPictureWhereInput[];
    NOT?: Prisma.CoverPictureWhereInput | Prisma.CoverPictureWhereInput[];
    id?: Prisma.StringFilter<"CoverPicture"> | string;
    created_at?: Prisma.DateTimeFilter<"CoverPicture"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CoverPicture"> | Date | string;
    url?: Prisma.StringFilter<"CoverPicture"> | string;
    by_profile_id?: Prisma.StringFilter<"CoverPicture"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type CoverPictureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    by_profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type CoverPictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    by_profile_id?: string;
    AND?: Prisma.CoverPictureWhereInput | Prisma.CoverPictureWhereInput[];
    OR?: Prisma.CoverPictureWhereInput[];
    NOT?: Prisma.CoverPictureWhereInput | Prisma.CoverPictureWhereInput[];
    created_at?: Prisma.DateTimeFilter<"CoverPicture"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CoverPicture"> | Date | string;
    url?: Prisma.StringFilter<"CoverPicture"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "by_profile_id">;
export type CoverPictureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    _count?: Prisma.CoverPictureCountOrderByAggregateInput;
    _max?: Prisma.CoverPictureMaxOrderByAggregateInput;
    _min?: Prisma.CoverPictureMinOrderByAggregateInput;
};
export type CoverPictureScalarWhereWithAggregatesInput = {
    AND?: Prisma.CoverPictureScalarWhereWithAggregatesInput | Prisma.CoverPictureScalarWhereWithAggregatesInput[];
    OR?: Prisma.CoverPictureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CoverPictureScalarWhereWithAggregatesInput | Prisma.CoverPictureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CoverPicture"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CoverPicture"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"CoverPicture"> | Date | string;
    url?: Prisma.StringWithAggregatesFilter<"CoverPicture"> | string;
    by_profile_id?: Prisma.StringWithAggregatesFilter<"CoverPicture"> | string;
};
export type CoverPictureCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile: Prisma.ProfileCreateNestedOneWithoutCoverInput;
};
export type CoverPictureUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile_id: string;
};
export type CoverPictureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutCoverNestedInput;
};
export type CoverPictureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CoverPictureCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
    by_profile_id: string;
};
export type CoverPictureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CoverPictureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CoverPictureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type CoverPictureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type CoverPictureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
};
export type CoverPictureNullableScalarRelationFilter = {
    is?: Prisma.CoverPictureWhereInput | null;
    isNot?: Prisma.CoverPictureWhereInput | null;
};
export type CoverPictureCreateNestedOneWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.CoverPictureCreateOrConnectWithoutBy_profileInput;
    connect?: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.CoverPictureCreateOrConnectWithoutBy_profileInput;
    connect?: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureUpdateOneWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.CoverPictureCreateOrConnectWithoutBy_profileInput;
    upsert?: Prisma.CoverPictureUpsertWithoutBy_profileInput;
    disconnect?: Prisma.CoverPictureWhereInput | boolean;
    delete?: Prisma.CoverPictureWhereInput | boolean;
    connect?: Prisma.CoverPictureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CoverPictureUpdateToOneWithWhereWithoutBy_profileInput, Prisma.CoverPictureUpdateWithoutBy_profileInput>, Prisma.CoverPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
    connectOrCreate?: Prisma.CoverPictureCreateOrConnectWithoutBy_profileInput;
    upsert?: Prisma.CoverPictureUpsertWithoutBy_profileInput;
    disconnect?: Prisma.CoverPictureWhereInput | boolean;
    delete?: Prisma.CoverPictureWhereInput | boolean;
    connect?: Prisma.CoverPictureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CoverPictureUpdateToOneWithWhereWithoutBy_profileInput, Prisma.CoverPictureUpdateWithoutBy_profileInput>, Prisma.CoverPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type CoverPictureCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
};
export type CoverPictureUncheckedCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    url: string;
};
export type CoverPictureCreateOrConnectWithoutBy_profileInput = {
    where: Prisma.CoverPictureWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
};
export type CoverPictureUpsertWithoutBy_profileInput = {
    update: Prisma.XOR<Prisma.CoverPictureUpdateWithoutBy_profileInput, Prisma.CoverPictureUncheckedUpdateWithoutBy_profileInput>;
    create: Prisma.XOR<Prisma.CoverPictureCreateWithoutBy_profileInput, Prisma.CoverPictureUncheckedCreateWithoutBy_profileInput>;
    where?: Prisma.CoverPictureWhereInput;
};
export type CoverPictureUpdateToOneWithWhereWithoutBy_profileInput = {
    where?: Prisma.CoverPictureWhereInput;
    data: Prisma.XOR<Prisma.CoverPictureUpdateWithoutBy_profileInput, Prisma.CoverPictureUncheckedUpdateWithoutBy_profileInput>;
};
export type CoverPictureUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CoverPictureUncheckedUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CoverPictureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coverPicture"]>;
export type CoverPictureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coverPicture"]>;
export type CoverPictureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coverPicture"]>;
export type CoverPictureSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    url?: boolean;
    by_profile_id?: boolean;
};
export type CoverPictureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "url" | "by_profile_id", ExtArgs["result"]["coverPicture"]>;
export type CoverPictureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type CoverPictureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type CoverPictureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $CoverPicturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CoverPicture";
    objects: {
        by_profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        url: string;
        by_profile_id: string;
    }, ExtArgs["result"]["coverPicture"]>;
    composites: {};
};
export type CoverPictureGetPayload<S extends boolean | null | undefined | CoverPictureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload, S>;
export type CoverPictureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CoverPictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CoverPictureCountAggregateInputType | true;
};
export interface CoverPictureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CoverPicture'];
        meta: {
            name: 'CoverPicture';
        };
    };
    findUnique<T extends CoverPictureFindUniqueArgs>(args: Prisma.SelectSubset<T, CoverPictureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CoverPictureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CoverPictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CoverPictureFindFirstArgs>(args?: Prisma.SelectSubset<T, CoverPictureFindFirstArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CoverPictureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CoverPictureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CoverPictureFindManyArgs>(args?: Prisma.SelectSubset<T, CoverPictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CoverPictureCreateArgs>(args: Prisma.SelectSubset<T, CoverPictureCreateArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CoverPictureCreateManyArgs>(args?: Prisma.SelectSubset<T, CoverPictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CoverPictureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CoverPictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CoverPictureDeleteArgs>(args: Prisma.SelectSubset<T, CoverPictureDeleteArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CoverPictureUpdateArgs>(args: Prisma.SelectSubset<T, CoverPictureUpdateArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CoverPictureDeleteManyArgs>(args?: Prisma.SelectSubset<T, CoverPictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CoverPictureUpdateManyArgs>(args: Prisma.SelectSubset<T, CoverPictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CoverPictureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CoverPictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CoverPictureUpsertArgs>(args: Prisma.SelectSubset<T, CoverPictureUpsertArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CoverPictureCountArgs>(args?: Prisma.Subset<T, CoverPictureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CoverPictureCountAggregateOutputType> : number>;
    aggregate<T extends CoverPictureAggregateArgs>(args: Prisma.Subset<T, CoverPictureAggregateArgs>): Prisma.PrismaPromise<GetCoverPictureAggregateType<T>>;
    groupBy<T extends CoverPictureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CoverPictureGroupByArgs['orderBy'];
    } : {
        orderBy?: CoverPictureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CoverPictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CoverPictureFieldRefs;
}
export interface Prisma__CoverPictureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CoverPictureFieldRefs {
    readonly id: Prisma.FieldRef<"CoverPicture", 'String'>;
    readonly created_at: Prisma.FieldRef<"CoverPicture", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"CoverPicture", 'DateTime'>;
    readonly url: Prisma.FieldRef<"CoverPicture", 'String'>;
    readonly by_profile_id: Prisma.FieldRef<"CoverPicture", 'String'>;
}
export type CoverPictureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where?: Prisma.CoverPictureWhereInput;
    orderBy?: Prisma.CoverPictureOrderByWithRelationInput | Prisma.CoverPictureOrderByWithRelationInput[];
    cursor?: Prisma.CoverPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CoverPictureScalarFieldEnum | Prisma.CoverPictureScalarFieldEnum[];
};
export type CoverPictureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where?: Prisma.CoverPictureWhereInput;
    orderBy?: Prisma.CoverPictureOrderByWithRelationInput | Prisma.CoverPictureOrderByWithRelationInput[];
    cursor?: Prisma.CoverPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CoverPictureScalarFieldEnum | Prisma.CoverPictureScalarFieldEnum[];
};
export type CoverPictureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where?: Prisma.CoverPictureWhereInput;
    orderBy?: Prisma.CoverPictureOrderByWithRelationInput | Prisma.CoverPictureOrderByWithRelationInput[];
    cursor?: Prisma.CoverPictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CoverPictureScalarFieldEnum | Prisma.CoverPictureScalarFieldEnum[];
};
export type CoverPictureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CoverPictureCreateInput, Prisma.CoverPictureUncheckedCreateInput>;
};
export type CoverPictureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CoverPictureCreateManyInput | Prisma.CoverPictureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CoverPictureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    data: Prisma.CoverPictureCreateManyInput | Prisma.CoverPictureCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CoverPictureIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CoverPictureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CoverPictureUpdateInput, Prisma.CoverPictureUncheckedUpdateInput>;
    where: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CoverPictureUpdateManyMutationInput, Prisma.CoverPictureUncheckedUpdateManyInput>;
    where?: Prisma.CoverPictureWhereInput;
    limit?: number;
};
export type CoverPictureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CoverPictureUpdateManyMutationInput, Prisma.CoverPictureUncheckedUpdateManyInput>;
    where?: Prisma.CoverPictureWhereInput;
    limit?: number;
    include?: Prisma.CoverPictureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CoverPictureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where: Prisma.CoverPictureWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoverPictureCreateInput, Prisma.CoverPictureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CoverPictureUpdateInput, Prisma.CoverPictureUncheckedUpdateInput>;
};
export type CoverPictureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where: Prisma.CoverPictureWhereUniqueInput;
};
export type CoverPictureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoverPictureWhereInput;
    limit?: number;
};
export type CoverPictureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CoverPicture.d.ts.map