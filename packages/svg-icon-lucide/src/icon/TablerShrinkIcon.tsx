import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShrinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShrinkIcon = React.forwardRef<SVGSVGElement, TablerShrinkIconProps>(function TablerShrinkIcon(
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
			<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
			<path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
			<path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
			<path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShrinkIcon.displayName = "TablerShrinkIcon";
}
