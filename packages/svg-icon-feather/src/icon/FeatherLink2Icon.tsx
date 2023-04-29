import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherLink2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherLink2Icon = React.forwardRef<SVGSVGElement, FeatherLink2IconProps>(function FeatherLink2Icon(
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
			<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
			<line x1="8" y1="12" x2="16" y2="12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherLink2Icon.displayName = "FeatherLink2Icon";
}
