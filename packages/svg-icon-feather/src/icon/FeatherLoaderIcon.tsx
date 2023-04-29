import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherLoaderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherLoaderIcon = React.forwardRef<SVGSVGElement, FeatherLoaderIconProps>(function FeatherLoaderIcon(
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
			<line x1="12" y1="2" x2="12" y2="6" />
			<line x1="12" y1="18" x2="12" y2="22" />
			<line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
			<line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
			<line x1="2" y1="12" x2="6" y2="12" />
			<line x1="18" y1="12" x2="22" y2="12" />
			<line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
			<line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherLoaderIcon.displayName = "FeatherLoaderIcon";
}
