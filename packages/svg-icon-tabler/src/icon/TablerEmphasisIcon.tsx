import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEmphasisIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEmphasisIcon = React.forwardRef<SVGSVGElement, TablerEmphasisIconProps>(function TablerEmphasisIcon(
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
			<path d="M16 5h-8v10h8m-1 -5h-7" />
			<path d="M6 20l0 .01" />
			<path d="M10 20l0 .01" />
			<path d="M14 20l0 .01" />
			<path d="M18 20l0 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEmphasisIcon.displayName = "TablerEmphasisIcon";
}
