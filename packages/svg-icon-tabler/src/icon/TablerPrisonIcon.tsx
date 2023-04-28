import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPrisonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPrisonIcon = React.forwardRef<SVGSVGElement, TablerPrisonIconProps>(function TablerPrisonIcon(
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
			<path d="M18 4v16" />
			<path d="M14 4v16" />
			<path d="M6 4v5" />
			<path d="M6 15v5" />
			<path d="M10 4v5" />
			<path d="M11 9h-6v6h6z" />
			<path d="M10 15v5" />
			<path d="M8 12h-.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPrisonIcon.displayName = "TablerPrisonIcon";
}
