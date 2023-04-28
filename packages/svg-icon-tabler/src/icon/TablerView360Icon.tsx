import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerView360IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerView360Icon = React.forwardRef<SVGSVGElement, TablerView360IconProps>(function TablerView360Icon(
	props,
	ref
) {
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M12 12m-4 0a4 9 0 1 0 8 0a4 9 0 1 0 -8 0" />
			<path d="M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerView360Icon.displayName = "TablerView360Icon";
}
