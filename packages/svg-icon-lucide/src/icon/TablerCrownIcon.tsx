import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCrownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCrownIcon = React.forwardRef<SVGSVGElement, TablerCrownIconProps>(function TablerCrownIcon(
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
			<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCrownIcon.displayName = "TablerCrownIcon";
}
