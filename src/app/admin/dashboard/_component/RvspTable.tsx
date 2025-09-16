"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type RSVP = {
  id: number;
  full_name: string;
  attending: boolean;
};

export default function RsvpTable({ rsvpList }: { rsvpList: RSVP[] }) {
  const [page, setPage] = useState(1);
  const pageSize = 10; // 👈 number of rows per page

  const totalPages = Math.ceil((rsvpList?.length ?? 0) / pageSize);

  const paginatedData =
    rsvpList?.slice((page - 1) * pageSize, page * pageSize) ?? [];

  return (
    <div className="space-y-4 border-neutral-200 p-5 border-[1px] rounded-sm">
      <Table className="text-xs sm:text-base">
        <TableCaption>A list of RSVPs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Attending</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length ? (
            paginatedData.map((row, idx) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">
                  {(page - 1) * pageSize + idx + 1}
                </TableCell>
                <TableCell>{row.full_name}</TableCell>
                <TableCell>
                  <Badge variant={row.attending ? "default" : "destructive"}>
                    {row.attending ? "Yes" : "No"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                No RSVPs found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination controls */}
      <div className="flex items-center justify-between md:justify-end md:gap-x-4">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
