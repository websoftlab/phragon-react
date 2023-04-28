import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampOffIcon = React.forwardRef<SVGSVGElement, TablerLampOffIconProps>(function TablerLampOffIcon(
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
			<path d="M9 20h6" />
			<path d="M12 20v-8" />
			<path d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLampOffIcon.displayName = "TablerLampOffIcon";
}
