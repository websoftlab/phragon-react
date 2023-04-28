import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMusicOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMusicOffIcon = React.forwardRef<SVGSVGElement, TablerMusicOffIconProps>(function TablerMusicOffIcon(
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
			<path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
			<path d="M9 17v-8m0 -4v-1h10v11" />
			<path d="M12 8h7" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMusicOffIcon.displayName = "TablerMusicOffIcon";
}
