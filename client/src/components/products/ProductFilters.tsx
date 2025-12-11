import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import type { ProductFiltersProps } from './types';

export function ProductFilters({
  onFilterChange,
  onLimitChange,
  totalItems,
  currentLimit,
}: ProductFiltersProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      onFilterChange({ search });
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, onFilterChange]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mb: 4,
        alignItems: 'center',
      }}
    >
      <TextField
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ flexGrow: 1, minWidth: 250, backgroundColor: 'white' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          },
        }}
      />

      <FormControl sx={{ minWidth: 80, maxWidth: 100 }}>
        <InputLabel>Per Page</InputLabel>
        <Select
          value={currentLimit}
          label="Per Page"
          onChange={e => onLimitChange(Number(e.target.value))}
          sx={{
            backgroundColor: 'white',
            height: 40,
          }}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
        {totalItems} products
      </Typography>
    </Box>
  );
}
