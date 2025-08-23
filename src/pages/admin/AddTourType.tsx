import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { AddTourTypeModal } from "@/components/modules/admin/tourType/AddTourModal";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetTourTypeQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/tour/tour.api";
import type { ITourType } from "@/types";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const AddTourType = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // const [limit, setLimit] = useState(10);
  // const { data } = useGetTourTypeQuery({ page: currentPage, limit });

  const { data } = useGetTourTypeQuery({ page: currentPage });
  const [removeTourType] = useRemoveTourTypeMutation();

  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing...");

    try {
      const res = await removeTourType(tourId).unwrap();

      if (res.success) {
        toast.success("Tour Type Deleted successfully", { id: toastId });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const totalPage = data?.meta?.totalPage || 1;

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <div className="border border-muted rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow className="w-full px-4">
              <TableHead className="w-full">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: ITourType) => (
              <TableRow className="px-2">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="font-medium text-right">
                  <DeleteConfirmation
                    onConfirm={() => handleRemoveTourType(item._id)}
                  >
                    <Button size={"sm"}>
                      <Trash2 />
                    </Button>
                  </DeleteConfirmation>
                  {/* <Button size={"sm"}>
                    <Trash2 />
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="py-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPage }, (_, index) => index + 1).map(
              (page) => (
                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                  <PaginationLink isActive={currentPage === page}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={
                  currentPage === totalPage
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AddTourType;
