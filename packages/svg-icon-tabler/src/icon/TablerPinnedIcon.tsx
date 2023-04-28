import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPinnedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPinnedIcon = React.forwardRef<SVGSVGElement, TablerPinnedIconProps>(function TablerPinnedIcon(
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
			<path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
			<path d="M12 16l0 5" />
			<path d="M8 4l8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPinnedIcon.displayName = "TablerPinnedIcon";
}
