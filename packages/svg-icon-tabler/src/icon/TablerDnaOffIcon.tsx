import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDnaOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDnaOffIcon = React.forwardRef<SVGSVGElement, TablerDnaOffIconProps>(function TablerDnaOffIcon(
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
			<path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" />
			<path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
			<path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDnaOffIcon.displayName = "TablerDnaOffIcon";
}
