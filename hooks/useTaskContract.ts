import { useEffect, useState } from 'react';
import { useAccount, useReadContract, useWriteContract, usePublicClient, useWaitForTransactionReceipt } from 'wagmi';
import { waitForTransactionReceipt } from '@wagmi/core';
import { useToast } from '@/hooks/use-toast';
import TaskContractABI from '@/contracts/TaskContract.json';
import { type TransactionReceipt } from 'viem';

const CONTRACT_ADDRESS = '0xd341624c5d0497e42be9e0c97c41df7bc312e198';

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

export function useTaskContract() {
    const { address } = useAccount();
    const { toast } = useToast();
    const [tasks, setTasks] = useState<Task[]>([]);
    const publicClient = usePublicClient();

    // Read tasks from contract
    const { data: tasksData, refetch: refetchTasks } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: TaskContractABI,
        functionName: 'getTasks',
        account: address,
    }) as { data: any[], refetch: () => void };

    // Create task
    const { writeContract: createTask, data: createData } = useWriteContract();

    // Toggle task
    const { writeContract: toggleTask, data: toggleData } = useWriteContract();

    // Delete task
    const { writeContract: deleteTask, data: deleteData } = useWriteContract();

    // Watch transactions
    useEffect(() => {
        if (createData) {
            toast({
                title: "Task Created",
                description: "Your task has been created successfully!",
            });
            refetchTasks();
        }
    }, [createData]);

    useEffect(() => {
        if (toggleData) {
            toast({
                title: "Task Updated",
                description: "Task status has been updated!",
            });
            refetchTasks();
        }
    }, [toggleData]);

    useEffect(() => {
        if (deleteData) {
            toast({
                title: "Task Deleted",
                description: "Task has been deleted successfully!",
            });
            refetchTasks();
        }
    }, [deleteData]);

    // Update local tasks when contract data changes
    useEffect(() => {
        if (tasksData) {
            setTasks(tasksData.map((task: any) => ({
                id: task.id.toString(),
                title: task.title,
                description: task.description,
                completed: task.completed,
                createdAt: Number(task.createdAt)
            })));
        }
    }, [tasksData]);

    return {
        tasks,
        createTask: (title: string, description: string) => {
            createTask({
                address: CONTRACT_ADDRESS,
                abi: TaskContractABI,
                functionName: 'createTask',
                args: [title, description]
            });
        },
        toggleTask: (taskId: string) => {
            toggleTask({
                address: CONTRACT_ADDRESS,
                abi: TaskContractABI,
                functionName: 'toggleTask',
                args: [taskId]
            });
        },
        deleteTask: (taskId: string) => {
            deleteTask({
                address: CONTRACT_ADDRESS,
                abi: TaskContractABI,
                functionName: 'deleteTask',
                args: [taskId]
            });
        },
    };
} 