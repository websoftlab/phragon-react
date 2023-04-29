import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMusicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMusicIcon = React.forwardRef<SVGSVGElement, FeatherMusicIconProps>(function FeatherMusicIcon(
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
			<path d="M9 18V5l12-2v13" />
			<circle cx="6" cy="18" r="3" />
			<circle cx="18" cy="16" r="3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherMusicIcon.displayName = "FeatherMusicIcon";
}
