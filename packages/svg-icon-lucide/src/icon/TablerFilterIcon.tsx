import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilterIcon = React.forwardRef<SVGSVGElement, TablerFilterIconProps>(function TablerFilterIcon(
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
			<path d="M22 3 L2 3 L10 12.46 L10 19 L14 21 L14 12.46 L22 3Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFilterIcon.displayName = "TablerFilterIcon";
}
