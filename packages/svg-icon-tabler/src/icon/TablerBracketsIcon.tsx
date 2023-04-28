import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracketsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracketsIcon = React.forwardRef<SVGSVGElement, TablerBracketsIconProps>(function TablerBracketsIcon(
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
			<path d="M8 4h-3v16h3" />
			<path d="M16 4h3v16h-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBracketsIcon.displayName = "TablerBracketsIcon";
}
