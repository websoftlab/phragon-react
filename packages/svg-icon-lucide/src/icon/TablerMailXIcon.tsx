import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailXIcon = React.forwardRef<SVGSVGElement, TablerMailXIconProps>(function TablerMailXIcon(
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
			<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			<path d="m17 17 4 4" />
			<path d="m21 17-4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailXIcon.displayName = "TablerMailXIcon";
}
