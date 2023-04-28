import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler3dRotateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler3dRotateIcon = React.forwardRef<SVGSVGElement, Tabler3dRotateIconProps>(function Tabler3dRotateIcon(
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
			<path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
			<path d="M22 11l-3 3" />
			<path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
			<path d="M3 12.5v5.5l5 3" />
			<path d="M8 15.545l5 -3.03" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	Tabler3dRotateIcon.displayName = "Tabler3dRotateIcon";
}
