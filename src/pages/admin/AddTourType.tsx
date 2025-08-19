import { AddTourTypeModal } from "@/components/modules/admin/tour/AddTourModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import type { ITourType } from "@/types";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);
  console.log(data);
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
       <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <div className="border border-muted rounded-2xl">
        <Table>
          <TableCaption>A list of recent Tour Types.</TableCaption>
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
                  <Button size={"sm"}>
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddTourType;
