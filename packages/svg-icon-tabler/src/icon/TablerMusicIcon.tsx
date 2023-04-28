import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMusicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMusicIcon = React.forwardRef<SVGSVGElement, TablerMusicIconProps>(function TablerMusicIcon(
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
			<path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M9 17l0 -13l10 0l0 13" />
			<path d="M9 8l10 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMusicIcon.displayName = "TablerMusicIcon";
}
