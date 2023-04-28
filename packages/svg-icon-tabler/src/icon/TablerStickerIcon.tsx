import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStickerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStickerIcon = React.forwardRef<SVGSVGElement, TablerStickerIconProps>(function TablerStickerIcon(
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
			<path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
			<path d="M20 12a8 8 0 1 1 -8 -8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStickerIcon.displayName = "TablerStickerIcon";
}
