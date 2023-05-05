import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrash2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrash2Icon = React.forwardRef<SVGSVGElement, TablerTrash2IconProps>(function TablerTrash2Icon(
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
			<path d="M3 6h18" />
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			<path d="M10 11 L10 17" />
			<path d="M14 11 L14 17" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrash2Icon.displayName = "TablerTrash2Icon";
}
