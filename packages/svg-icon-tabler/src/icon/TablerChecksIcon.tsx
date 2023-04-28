import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChecksIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChecksIcon = React.forwardRef<SVGSVGElement, TablerChecksIconProps>(function TablerChecksIcon(
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
			<path d="M7 12l5 5l10 -10" />
			<path d="M2 12l5 5m5 -5l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChecksIcon.displayName = "TablerChecksIcon";
}
