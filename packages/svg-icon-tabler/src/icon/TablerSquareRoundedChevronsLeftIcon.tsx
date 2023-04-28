import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRoundedChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRoundedChevronsLeftIcon = React.forwardRef<
	SVGSVGElement,
	TablerSquareRoundedChevronsLeftIconProps
>(function TablerSquareRoundedChevronsLeftIcon(props, ref) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M15 15l-3 -3l3 -3" />
			<path d="M11 15l-3 -3l3 -3" />
			<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSquareRoundedChevronsLeftIcon.displayName = "TablerSquareRoundedChevronsLeftIcon";
}
