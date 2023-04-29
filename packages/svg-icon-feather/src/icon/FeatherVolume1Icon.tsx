import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVolume1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVolume1Icon = React.forwardRef<SVGSVGElement, FeatherVolume1IconProps>(function FeatherVolume1Icon(
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
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
			<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherVolume1Icon.displayName = "FeatherVolume1Icon";
}
