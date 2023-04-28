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
			<path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCrownIcon.displayName = "TablerCrownIcon";
}
