import { getSearchResults } from "@/lib/search-service";
import { Skeleton } from "@/components/ui/skeleton";

import {
  SearchResultCard,
  SearchResultCardSkeleton,
} from "./search-result-card";

interface SearchResultsProps {
  term?: string;
}

export const SearchResults = async ({ term }: SearchResultsProps) => {

  const data = await getSearchResults(term);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results for the term &quot;{term}&quot;
      </h2>
      {data.length === 0 && (
        <p className="text-muted-foreground text-xs">
          No results found. Try searching for something else.
        </p>
      )}
      <div className="flex flex-col gap-y-4">
        {data.map((result) => (
          <SearchResultCard key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
};

export const SearchResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="flex flex-col gap-y-4">
        {[...Array(4)].map((_, i) => (
          <SearchResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}