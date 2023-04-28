import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGifIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGifIcon = React.forwardRef<SVGSVGElement, TablerGifIconProps>(function TablerGifIcon(props, ref) {
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
			<path d="M8 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
			<path d="M12 8v8" />
			<path d="M16 16v-8h5" />
			<path d="M20 12h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGifIcon.displayName = "TablerGifIcon";
}
